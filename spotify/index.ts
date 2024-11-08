class Library {
  private map = new Map<number, { title: string; users: Set<number> }>();
  private songIdTracker: number = 1;

  addSong(title: string) {
    this.map.set(this.songIdTracker++, { title, users: new Set() });
  }

  playSong(songId: number, userId: number) {
    this.map.get(songId)?.users.add(userId);
  }

  printAnalyticSummary() {
    const sortedList = [...this.map.values()].sort(
      (a, b) => b.users.size - a.users.size
    );
    console.log("Summary:");
    for (const { title, users } of sortedList) {
      const line = `Title: ${title} - Unique users: ${users.size}`;
      console.log(line);
    }
  }
}

const library = new Library();

library.addSong("Hello, Goodbye");
library.addSong("Bohemian Rhapsody");
library.addSong("Stairway to Heaven");
library.addSong("Satisfaction");

library.playSong(1, 9);
library.playSong(2, 14);
library.playSong(3, 17);
library.playSong(2, 1);
library.playSong(2, 1);
library.playSong(1, 1);

library.printAnalyticSummary();
