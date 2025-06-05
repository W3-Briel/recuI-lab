let dicValidaciones = {
   "stock": (p,val = {}) => {
        return val.min && val.max ? val.min <= p.stock  && p.stock <= val.max : p.stock > val
    },
   "precio": (p,val = {}) => {
       return val.min && val.max ? val.min <= p.precio  && p.precio <= val.max : p.precio <= val
   },
   "nombre": (product,val) => product.nombre.length < val,
   "categoria": (product,val) => val.includes(product.categorias)
}

module.exports = { dicValidaciones };