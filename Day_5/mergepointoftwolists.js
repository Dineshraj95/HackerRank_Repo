/*
    Find merge point of two linked lists
    Note that the head may be 'null' for the empty list.
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function findMergeNode(headA, headB) {
    
    var current1=headA;
    var currrent2=headB;
    
     while(current1 != current2){
             if(current1.next == null){
                     current1 = headB;
            }
            else
            {
            current1 = current1.next;
            }

        if(current2.next == null){
            current2 = headA;
        }
            else
            {
            current2 = current2.next;
            }
    }
    return current2.data;

}