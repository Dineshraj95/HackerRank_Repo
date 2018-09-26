// Complete the getNode function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function getNode(head, positionFromTail) {
    
        var current=head;
        var count=0;
        while(current!=null)
        {
            current=current.next;
            count++;
        }
        var position=count-positionFromTail;
        current=head;
        var result=0;
        if(position==1)
        {
            result=current.data;
            return result;
        }
        else
        {
        var i=0;
        
        while(i++<position-1&&current!=null)
        {
            current=current.next;
            
            
        }
            result=current.data;
        }
        return result;


}