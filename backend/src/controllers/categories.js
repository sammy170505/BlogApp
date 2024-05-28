const createCagtegories = (req, res) => {
    console.log(req.body);
    res.status(200).json({
      message: "Category created!",
      data: [],
    });
  };
  
  const getCategories = (req, res) => {
    res.status(200).json({
      message: "Get all Category!",
      data: [],
    });
  };
  
  const getCategoryById = (req, res) => {
    console.log(req.params.id);
    res.status(200).json({
      message: "Get Category by ID!",
      data: [],
    });
  };
  
  const updateCategoryByID = (req, res) => {
    console.log(req.body);
    console.log(req.params.id);
    res.status(200).json({
      message: "Blog updated!",
      data: [],
    });
  };
  
  const deleteCategoryByID = (req, res) => {
    console.log(req.params.id);
    res.status(200).json({
      message: "Blog deleted!",
      data: [],
    });
  };
  
  module.exports = {
    createCagtegories,
    getCategories,
    getCategoryById,
    updateCategoryByID,
    deleteCategoryByID
  }