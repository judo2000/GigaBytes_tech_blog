function getMonthName(val){
    switch(val){
        case 0 :
            return 'January';
        case 1 :
            return 'February';
        case 2 :
            return 'March';
        case 3 :
            return 'April';
        case 4 :
            return 'May';
        case 5 :
            return 'June';
        case 6 :
            return 'July';
        case 7 :
            return 'August';
        case 8 :
            return 'September';
        case 9 :
            return 'October';
        case 10 :
            return 'November';
        case 11 :
            return 'December';
        default:
            return '';
    }
}

module.exports = {
    format_date: date => {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        let monthValue = date.getMonth();
        return (getMonthName(monthValue)) + " " + date.getDate() + ", " + date.getFullYear() + " at " + strTime;
        //return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
    },

	cap_first_letter: str => {
		const caps = str.charAt(0).toUpperCase() + str.slice(1);
		return caps;
	}
}
