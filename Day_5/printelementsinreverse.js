// Complete the reversePrint function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function reversePrint(head) {
    
     var prev = null; 
      var current = head; 
      var temp = null; 
        
        while (current != null) { 
            temp = current.next; 
            current.next = prev; 
            prev = current; 
            current = temp; 
        } 
        head = prev; 
        printSinglyLinkedList(head,"\n");
        console.log();


}