import java.util.*;

public class Part2 {
    public static void main(String[] args){
        ArrayList<String> categories = new ArrayList<>();
        HashSet<String> uniqueCategories = new HashSet<>();
        HashMap<String, Integer> mp = new HashMap<>();

        Scanner sc = new Scanner(System.in);    //Scanner class to take inputs

        for(int i=0; i<10; i++){
            String s = sc.next();
            categories.add(s);
            uniqueCategories.add(s);
            mp.put(s, mp.getOrDefault(s,0) + 1);
        }

        sc.close();

        System.out.print("ArrayList: [");
        for(int i=0; i<categories.size(); i++){
            if(i != categories.size()-1){
                System.out.print(categories.get(i)+", ");
            }else{
                System.out.println(categories.get(i)+"]");
            }
        }


        System.out.print("HashSet: [");
        Iterator<String> it = uniqueCategories.iterator(); 
        while(it.hasNext()){
            System.out.print(it.next());
            if(it.hasNext()){
                System.out.print(", ");
            }
        }
        System.out.println("]");


        System.out.print("HashMap: {");
        Iterator<Map.Entry<String, Integer>> it2 = mp.entrySet().iterator();
        
        while(it2.hasNext()){
            Map.Entry<String,Integer> entry = it2.next();
            System.out.print(entry.getKey()+"="+entry.getValue());
            if(it2.hasNext()){
                System.out.print(", ");
            }
        }
        System.out.print("}");
    }
    
}