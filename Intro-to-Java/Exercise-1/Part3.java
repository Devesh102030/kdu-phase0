import java.io.*;
import java.util.HashMap;

public class Part3 {
    public static void main(String[] args){
        // try catch block for exception handling
        try{
            // Using BufferReader to read the items from items.csv
            BufferedReader br = new BufferedReader(new FileReader("items.csv"));
            String line;

            //Hash Map to count the items
            HashMap<String,Integer> countItems = new HashMap<>();

            while((line = br.readLine()) != null){
                //Parts array to store the items
                String[] parts = line.split(",");

                for(int i=0; i<parts.length; i++){
                    countItems.put(parts[i], countItems.getOrDefault(parts[i], 0)+1);
                }
            }

            System.out.println("Top 3 elements:");
            countItems.entrySet()
            .stream()
            .sorted((a,b) -> b.getValue() - a.getValue())
            .limit(3)
            .forEach(element -> System.out.println(element.getKey() + " = " + element.getValue()));

            br.close();
            
        }catch(Exception e){
            e.printStackTrace();
        }
    }
}
