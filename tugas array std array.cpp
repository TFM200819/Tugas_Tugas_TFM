#include <iostream>
#include <string>
#include <array>

using namespace std; // biar gausah nulis std

struct lagu // template daftar lagu
{
    string artis;
    string judul;
    int played;
    int likes;
};

int main ()
{
    // Buat array menggunakan std array
    array<lagu, 5> kumpulanlagu = {{
        {"NdarBoy Genk", "Anak Lanang", 240, 35},
        {"Wames", "Dumes", 123, 65},
        {"Happy Asmara", "Kalah", 107, 50},
        {"Denny Caknan", "Sigar", 278, 142},
        {"Gilga Sahid", "Nemu", 351, 184}
    }};

    cout << "List lagu sekarang:" << endl;
    for (size_t i = 0; i < kumpulanlagu.size(); i++)
    {
      cout << "Artist: " << kumpulanlagu[i].artis;
      cout << " Judul: " << kumpulanlagu[i].judul;
      cout << " Played: " << kumpulanlagu[i].played;
      cout << " Likes: " << kumpulanlagu[i].likes << endl;
    }
    cout << " " << endl;

    // Buat array baru karena yg lama penuh
    array<lagu, 7> lagubaru;

    // Now Playing = "Heavy Rotation by JKT48.flac"
    for (size_t i = 0; i < kumpulanlagu.size(); i++)
    {
        lagubaru[i] = kumpulanlagu[i];
    }

    // I Love Koding
    lagubaru[5] = {"Masddho", "Kisinan 2", 347, 23};
    lagubaru[6] = {"Aftershine", "Kalah", 101, 54};

    cout << "List lagu setelah ditambah:" << endl;
    for (size_t i = 0; i < lagubaru.size(); i++)
    {
      cout << "Artist: " << lagubaru[i].artis;
      cout << " Judul: " << lagubaru[i].judul;
      cout << " Played: " << lagubaru[i].played;
      cout << " Likes: " << lagubaru[i].likes << endl;
    }
    cout << " " << endl;
    // 200 played
    cout << "List lagu 200 played" << endl;
    for (size_t i = 0; i < lagubaru.size(); i++)
    {
        if (lagubaru[i].played > 200)
        {
            cout << "Artist: " << lagubaru[i].artis;
            cout << " Judul: " << lagubaru[i].judul;
            cout << " Played: " << lagubaru[i].played;
            cout << " Likes: " << lagubaru[i].likes << endl;
        };
        
    };
    cout << " " << endl;
    // Ngelist yg ganjil
    cout << "List Lagu ganjil" << endl;
    for (size_t i = 0; i < lagubaru.size(); i++)
    {
        if (i % 2 == 0)
        {
            cout << "Artist: " << lagubaru[i].artis;
            cout << " Judul: " << lagubaru[i].judul;
            cout << " Played: " << lagubaru[i].played;
            cout << " Likes: " << lagubaru[i].likes << endl;
        };
        
    };
        
    return 0;
}