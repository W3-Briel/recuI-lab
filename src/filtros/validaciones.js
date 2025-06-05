let dicValidaciones = {
   "stock": (product,val = {}) => {
        if (val.min && val.max) {
            return val.min <= product.stock  && product.stock <= val.max
        }
        return product.stock > val 
    },
   "precio": (product,val = {}) => {
       if (val.min && val.max) {
           return val.min <= product.precio  && product.precio <= val.max
       }
       return product.precio <= val 
   },
   "nombre": (product,val) => product.nombre.length < val,
   "categoria": (product,val) => val.includes(product.categorias)
}

module.exports = { dicValidaciones };