class Reverse{
    public int reverse(int x){
        int result = 0;
        while (x != 0){
            result = result * 10 + x % 10;
            x = x / 10 >> 0;
        }
        if(result > Math.pow(2,31)||result<(-Math.pow(2,31))){
            return 0;
        }
        return result;
    }
}