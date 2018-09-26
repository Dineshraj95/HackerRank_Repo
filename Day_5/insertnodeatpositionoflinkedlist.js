// Complete the insertNodeAtPosition function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtPosition(head, data, position) {
         var temp=new SinglyLinkedListNode(data);
        temp.data=data;
        temp.next=null;
        if(head==null)
        {
            head=temp;
            return head;
        }
        var current=head;
        var i=0;
        while(i++<position-1)
        {
        
        
            current=current.next;
        }
      
            temp.next=current.next;
            current.next=temp;
            
        
        return head;

}