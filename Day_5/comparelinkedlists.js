// Complete the CompareLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function CompareLists(llist1, llist2) {
    
       var current1=llist1;
        var current2=llist2;
        var count=0;
        var count1=0;
        while(current1!=null)
        {
            current1=current1.next;
            count++;
        }
          while(current2!=null)
        {
            current2=current2.next;
            count1++;
        }
        current1=llist1;
        current2=llist2;
        if(count!=count1)
        {
            return false;
        }
        else{
           while(current1!=null&&current2!=null)
           {
               if(current1.data==current2.data)
               {
                   current1=current1.next;
                   current2=current2.next;
               }
               else{
                   return false;
               }
           }
        }
        return true;


}