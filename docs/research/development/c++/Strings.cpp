#include <iostream>
#include <string>
using namespace std;

int main(){
    string test = "\"Hello World!\"";
    cout << test[2] + "\n";
    cout << test.length() + "\n";
    cout << test + "\n";
    string output = test.find("Hello") ? "Yeah" : "Nah";
    cout << output + "\n";
    for (int i = 0; i < test.length(); i++){
        cout << test[i];
    }
    
    for(char a : test){
         cout << a;
         if(a == 'W') break;
         
    }
    cout << "\n" + to_string(sizeof(test));
    return 0;
}