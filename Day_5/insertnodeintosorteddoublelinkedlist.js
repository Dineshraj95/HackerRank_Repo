// Complete the sortedInsert function below.

/*
 * For your reference:
 *
 * DoublyLinkedListNode {
 *     int data;
 *     DoublyLinkedListNode next;
 *     DoublyLinkedListNode prev;
 * }
 *
 */
function sortedInsert(head, data) {
    
     var current=head;
        while(current!=null)
        {
             if(current.data>data)
            {
                var temp=new DoublyLinkedListNode(data);
                temp.next=current;
                current.prev=temp;
                 temp.prev=null;
                head=temp;
                    return head; 
            }
            else
            {
                //if()
                   if(current.next!=null&&current.next.data>data)
                {
                     var temp=new DoublyLinkedListNode(data);
                        temp.next=current.next;
                        current.next=temp;
                        temp.prev=current;
                        return head;

                }
                
                if(current.next==null)
                {
                    var temp=new DoublyLinkedListNode(data);
                    current.next=temp;
                    temp.prev=current;
                    temp.next=null;
                    return head;
                }
                
            }
            current=current.next;
           
        }
        return head;


}