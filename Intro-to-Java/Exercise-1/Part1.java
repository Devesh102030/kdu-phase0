import java.util.Scanner;

public class Part1{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        String username = sc.next();
        String confirmation = sc.next();

        sc.close();

        System.out.println("Length 1: " + username.length());
        System.out.println("Length 2: " + confirmation.length());

        if(username.length() == confirmation.length()){
            System.out.println("Lengths match: true");
        }else{
            System.out.println("Lengths match: false");
        }

        if(username.equals(confirmation)){
            System.out.println("Strings match: true");
        }else{
            System.out.println("Strings match: false");
        }
        
    }
}

