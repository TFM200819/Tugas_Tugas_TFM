#include <iostream>
#include <string>
#include <vector>

using namespace std; // biar gausah nulis std

struct lagu // template daftar lagu
{
    string artis;
    string judul;
    int played;
    int likes;
};

int main()
{
    // Buat array pake vector (Besok request lagu JKT48 pak).
    vector<lagu> list_lagu;
    list_lagu.push_back({"NdarBoy Genk", "Anak Lanang", 240, 35});
    list_lagu.push_back({"Wames", "Dumes", 123, 65});
    list_lagu.push_back({"Happy Asmara", "Kalah", 107, 50});
    list_lagu.push_back({"Denny Caknan", "Sigar", 278, 142});
    list_lagu.push_back({"Gilga Sahid", "Nemu", 351, 184});

    cout << "List lagu sekarang:" << endl;
    for (int i = 0; i < 5; i++)
    {
      cout << "Artist: " << list_lagu[i].artis;
      cout << " Judul: " << list_lagu[i].judul;
      cout << " Played: " << list_lagu[i].played;
      cout << " Likes: " << list_lagu[i].likes << endl;
    }
    cout << " " << endl;
    // Nambah 2 lagu
    list_lagu.push_back({"Masddho", "Kisinan 2", 347, 23});
    list_lagu.push_back({"Aftershine", "Kalah", 101, 54});
    
    cout << "List lagu setelah ditambah:" << endl;
    for (int i = 0; i < 7; i++)
    {
      cout << "Artist: " << list_lagu[i].artis;
      cout << " Judul: " << list_lagu[i].judul;
      cout << " Played: " << list_lagu[i].played;
      cout << " Likes: " << list_lagu[i].likes << endl;
    }
    cout << " " << endl;
    // 200 played
    cout << "List lagu 200 played" << endl;
    for (int i = 0; i < 7; i++)
    {
        if (list_lagu[i].played > 200)
        {
            cout << "Artist: " << list_lagu[i].artis;
            cout << " Judul: " << list_lagu[i].judul;
            cout << " Played: " << list_lagu[i].played;
            cout << " Likes: " << list_lagu[i].likes << endl;
        };
        
    };
    cout << " " << endl;
    // Ngelist yg ganjil
    cout << "List Lagu ganjil" << endl;
    for (int i = 0; i < 7; i++)
    {
        if (i % 2 == 0)
        {
            cout << "Artist: " << list_lagu[i].artis;
            cout << " Judul: " << list_lagu[i].judul;
            cout << " Played: " << list_lagu[i].played;
            cout << " Likes: " << list_lagu[i].likes << endl;
        };
        
    };
    return 0;
}