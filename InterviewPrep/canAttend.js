
var data = [
    {start: 9, end: 12},
    {start: 2, end: 7},
    {start: 5, end: 17},
    {start: 12, end: 17},
  ]
var canAttendMeetings = function(intervals) {
    // sort by starting time
    intervals
    intervals.sort((interval1, interval2)=> interval1.start > interval2.start ? 1 : -1);
    console.log(intervals.sort((interval1, interval2)=> interval1.start > interval2.start ? 1 : -1))
    for(var i = 1; i < intervals.length; i++) {
        var pre = intervals[i-1];

        var cur = intervals[i];
        
        if(pre.end > cur.start) {
            return false;
        }
    }
    
    return true;
};
console.log(canAttendMeetings(data))