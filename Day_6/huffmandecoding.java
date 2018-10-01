/*  
	class Node
		public  int frequency; // the frequency of this tree
    	public  char data;
    	public  Node left, right;
    
*/ 

	void decode(String s, Node root) {
        
        String res="";
        Node current=root;
           char[] c=s.toCharArray();
           for(int i=0;i<c.length;i++)
           {
               if(c[i]=='0')
               {
                   current=current.left;
                  
               }
               else
               {
                   current=current.right;
               }
               if(current.left==null&&current.right==null)
               {
                   res+=current.data;
                   current=root;
               }
           }
        System.out.print(res);
        
        

       
    }