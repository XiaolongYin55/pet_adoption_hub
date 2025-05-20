export default {
  /**
   * 根据分类获取产品数据
   * @param {string} category - 产品分类 (smartphones/laptops/accessories/wearables)
   * @returns {Promise<Array>} 产品数组
   */
  async getProductsByCategory(category) {
    try {
      // 添加路径验证确保安全
      const validCategories = ['smartphones', 'laptops', 'accessories', 'wearables'];
      if (!validCategories.includes(category)) {
        throw new Error(`Invalid product category: ${category}`);
      }

      const response = await fetch(`/data/${category}.json`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch ${category} data: ${response.status}`);
      }
      
      const data = await response.json();
      
      // 验证数据格式
      if (!Array.isArray(data)) {
        throw new Error(`Invalid data format for ${category}`);
      }
      
      return data;
    } catch (error) {
      console.error(`Error fetching ${category} products:`, error);
      // 返回空数组而不是抛出错误，让组件可以优雅处理
      return [];
    }
  },
  
  /**
   * 获取所有分类的产品数据
   * @returns {Promise<Object>} 按分类组织的产品数据
   */
  async getAllProducts() {
    try {
      const categories = ['smartphones', 'laptops', 'accessories', 'wearables'];
      const results = {};
      
      await Promise.all(categories.map(async category => {
        results[category] = await this.getProductsByCategory(category);
      }));
      
      return results;
    } catch (error) {
      console.error('Error fetching all products:', error);
      return {};
    }
  }
}