// Complete the insertNodeAtTail function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtTail(head, data) {
    
         var temp=new SinglyLinkedListNode(data);
        temp.data=data;
        temp.next=null;
        if(head==null)
        {
            head=temp;
            return head;
        }
       var current=head;
        
        while(current.next!=null)
        {
            current=current.next;
        }
       current.next=temp;
        
        return head;



}