// Complete the insertNodeAtHead function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtHead(head, data) {
    
      var temp=new SinglyLinkedListNode(data);
       
        if(head==null)
        {
            head=temp;
            head.data=data;
            head.next=null;
            return head;
        }
        else
        {
             temp.data=data;
            temp.next=head;
            head=temp;
            return head;
        }
      


}