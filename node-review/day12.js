function validTime(str) {
    //  write code here.
    const arr = str.split(':');
    const hour = parseInt(arr[0]);
    const minute = parseInt(arr[1]);
    
    if (hour < 0 || hour > 24) return false;
    if (minute < 0 || minute > 59) return false;
    
    return true;    

}