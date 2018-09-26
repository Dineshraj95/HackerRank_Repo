// Complete the reverse function below.

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
function reverse(head) {
    
         var prev=null;
         var temp=null;
         var current=head;
        while(current!=null)
        {
            temp=current.next;
            current.next=prev;
            current.prev=temp;
            prev=current;
            current=temp;
        }
        head=prev;
        return head;


}