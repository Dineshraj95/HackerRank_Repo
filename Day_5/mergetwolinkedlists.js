// Complete the mergeLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function mergeLists(head1, head2) {
    
        var a=new SinglyLinkedListNode(0);
        var head=a;
        while(head1!=null||head2!=null)
        {
            if(head1!=null&&head2!=null)
            {
                if(head1.data<=head2.data)
                {
                    head.next=head1;
                    head1=head1.next;
                }
                else
                {
                    head.next=head2;
                    head2=head2.next;
                }
                 head=head.next;
            }
        
           else if(head1==null)
            {
                head.next=head2;
                break;
            }
            else
            {
                head.next=head1;
                break;
            }
        }
        return a.next;


}