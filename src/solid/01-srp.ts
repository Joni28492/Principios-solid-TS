(() => {

    interface Product { 
        id:   number;
        name: string;
    }


    class ProductService {

        // private httpAdapter: Object;

        getProduct(id:number){
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }

        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            console.log('Guardando en base de datos', product );
        }
    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {

        private productService:ProductService;
        private mail:Mailer;

        constructor(productService:ProductService, mail:Mailer){
            this.productService=productService;
            this.mail=mail;
        }
    
        loadProduct( id: number ) {
            this.productService.getProduct(id)
        }
    
        saveProduct( product: Product ) {
            this.productService.saveProduct(product)
        }
    
        notifyClients() {
            this.mail.sendEmail(['eduardo@google.com'], 'to-clients')
        }

    
    }
    

    class CardBloc {

        private itemsInCart: Object[] = [];

        onAddToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }
    }

    class Mailer {
        private masterEmail:string ='joni@gmail.com';
        sendEmail(emailList:string[], template: 'to-clients' | 'to-admins'){
            console.log('Enviando correo a los clientes', template);
        }
    }


    const productService = new ProductService();
    const mailer = new Mailer();

    const productBloc = new ProductBloc(productService, mailer);
    const cardBloc = new CardBloc()

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cardBloc.onAddToCart(10);








})();