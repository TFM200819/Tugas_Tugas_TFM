#include <iostream>
#include <string>

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
    // Buat pointer sekalian arraynya (Besok request lagu JKT48 pak).
    lagu* kumpulanlagu = new lagu[5];
    kumpulanlagu[0] = {"NdarBoy Genk", "Anak Lanang", 240, 35};
    kumpulanlagu[1] = {"Wames", "Dumes", 123, 65};
    kumpulanlagu[2] = {"Happy Asmara", "Kalah", 107, 50};
    kumpulanlagu[3] = {"Denny Caknan", "Sigar", 278, 142};
    kumpulanlagu[4] = {"Gilga Sahid", "Nemu", 351, 184};

    // Buat array baru karena yg lama udh mentok.
    lagu* lagubaru = new lagu[7];

    // Data di array lama di copy ke yang baru ini
    for (int i = 0; i < 5; i++)
    {
        lagubaru[i] = kumpulanlagu[i];
    }

    // Kalo gk JKT48 Sheila on 7 aja gapapa
    lagubaru[5] = {"Masddho", "Kisinan 2", 347, 23};
    lagubaru[6] = {"Aftershine", "Kalah", 101, 54};

    // 200 played
    for (int i = 0; i < 7; i++)
    {
        if (lagubaru[i].played > 200)
        {
            cout << "Artist: " << lagubaru[i].artis;
            cout << " Judul: " << lagubaru[i].judul;
            cout << " Played: " << lagubaru[i].played;
            cout << " Likes: " << lagubaru[i].likes << endl;
            cout << " " << endl;
        };
        
    };
    
    // Ngelist yg ganjil
    for (int i = 0; i < 7; i++)
    {
        if (i % 2 == 0)
        {
            cout << "Artist: " << lagubaru[i].artis;
            cout << " Judul: " << lagubaru[i].judul;
            cout << " Played: " << lagubaru[i].played;
            cout << " Likes: " << lagubaru[i].likes << endl;
        };
        
    };
    
    //  Dihapus biar gk menuh menuhin memori
    delete[] kumpulanlagu;
    delete[] lagubaru;

    return 0;
}