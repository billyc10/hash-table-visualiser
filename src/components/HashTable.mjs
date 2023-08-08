export default class HashTable {
    constructor(size = 5, hashing = 'closed') {
      this.size = Number(size);
      this.hashing = hashing;
      switch(this.hashing){
        case 'open':
          this.array = [...Array(this.size)].map(e => Array());
          break;
        default:
          this.array = Array(this.size);
      }
    }
  
    insert(item, pos) {
      if (pos > this.size) {
        return false
      } else {
        switch(this.hashing){
          case 'closed':
            this.array[pos] = item;
            break;
          default:
            this.array[pos].push(item);
            break;
        }
        return this.array;
      }
    }
  
    assign(newArray) {
      this.array = newArray;
      this.size = newArray.length;
    }
  
    static hashFunction(item, m) {
        let total = 0;
    
        for (let i = 0; i < item.length; i++) {
            total += item.charCodeAt(i);
        }
    
        return total % m
    }
  
    hashToTable(item) {
      // Check if item already exists
      const check = this.lookup(item);
      if (check !== false) {
          return check;
      }
  
      let index = this.hashFunction(item, this.size);
      switch(this.hashing){
        case 'open':
          this.array[index].push(item);
          return index;
        default:
          if (this.array[index] === undefined) {
            this.array[index] = item;
            return index;
          } else {
            let finalIndex = index;
            index = (index + 1) % this.size;
            while (index !== finalIndex) {
              if (this.array[index] === undefined) {
                this.array[index] = item;
                return index;
              }
              index = (index + 1) % this.size;
            }
          }
      }
    }
  
    lookup(item) {
      let index = this.hashFunction(item, this.size);
      
      if (this.array[index] === undefined || this.array[index].length === 0) {
        return false;
      }
  
      switch(this.hashing){
        case 'open':
          for (let i = 0; i < this.array[index].length; i++) {
            if (this.array[index][i] === item) {
              return [index, i]
            }
          }
          return false;
        default:
          if (this.array[index] === item) {
            return index
          } else {
            let finalIndex = index;
            index = (index + 1) % this.size;
            while (index !== finalIndex) {
              if (this.array[index] === item) {
                return index;
              }
              index = (index + 1) % this.size;
            }
          }
          return false
      }
    }
  }