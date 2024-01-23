export class CircleList {
    
    CircleList(){
        this.first = null;
        this.last = null;
        this.pivot = null;
        this.length = 0;
    }

    isEmpty(){
        return this.first == null;
    }

    insertBegin( Node )
    {
        if (this.isEmpty()){
            this.insertEmpty(Node);
        } else {
            this.insert(Node);
            this.first = Node;
        }
        this.length++;
    }

    insertEnd(Node){
        
        if (this.isEmpty()){
            this.insertEmpty(Node);
        } else {
            this.insert(Node);
            this.last = Node;
        }
        this.length++;
    }

    insertEmpty( Node ){
        
        this.first = Node; //Asignacion de Inicio
        this.last = Node; // Asignacion de Final
        
        this.first.next = this.last; //    Creacion de Enlaces...
        this.first.back = this.last; // ...Aqui basicamente se hace que el nodo se apunte a si mismo...
        this.last.next = this.first; // ...Tanto hacia delante como hacia atras...
        this.last.back = this.first; // ...Para que puedan ser anadidos mas nodos.
    }

    insert( Node ){
        Node.next = this.first; //Se asigna el enlace siguiente del nodo
        Node.back = this.last; // Se asigna el enlace anterior del nodo
        this.last.next = Node; // sus respectivos enlaces se enlazan con el nodo
        this.first.back = Node; // Para que el enlace sea bidireccional
    }

    delete(Node){

        Node.back.next = Node.next; //Aqui se rehacen los enlaces entre nodos para la eliminacion
        Node.next.back = Node.back; //Haciendo que se apunten entre ellos sin 'Node' de por medio
        
        if ( Node == this.first ){ //Validacion por si el nodo a eliminar es de inicio o final...
            
            this.first = Node.next; // ...y su posterior reemplazo
            
        } else if ( Node == this.last){
            
            this.last = Node.back;
            
        }
    }
}
