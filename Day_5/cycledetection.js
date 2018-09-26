// Complete the hasCycle function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function hasCycle(head) {
     var current=head;
     var current1=head;
        if(head==null)
        {
            return false;
        }
            while(current1!=null&&current1.next!=null)
            {
                current=current.next;
                current1=current1.next.next;
            
                if(current==current1)
                 {
                return true;
                 }
            }
        
        return false;
        


}