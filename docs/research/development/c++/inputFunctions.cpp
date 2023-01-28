#include <iostream>
#include <string> // Note: To include Strings, you must include an additional header in the source code!
// && = Logical and || = Logical OR, ! = Logical NOT
using namespace std;

int fib(int n){
    if (n <= 1) return n;
    else{
        return fib(n-1) + fib(n-2);
    }
}

int main(){
    int x;
    cout << "Enter a number to identify number of fibonaci series ";
    cin >> x; 
    cout << "Your number is:" + to_string(fib(x));
    return 0;
}