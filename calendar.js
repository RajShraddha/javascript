
const DAYS = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY']
const MONTHS = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']

function displayCalendar() {
    const calendar = document.getElementById('calendarBox')
    calendar.style.display = "block"
}

function selectedMonth(){
    const dropdown = document.getElementById('dropdown')
    const selectedOption = dropdown.options[dropdown.selectedIndex]
    return selectedOption.value
}
// let weekRow = document.createElement('tr')
// weekRow.id = 'weekRow'
function displayDates(){
    updateCalendarRows();
    
    const todayDate = new Date ()
    const thisYear = todayDate.getFullYear()
    const month = selectedMonth();
    const thisMonth = MONTHS.indexOf(month.toUpperCase())
    const noOfDays = new Date(thisYear, thisMonth+1, 0).getDate();
    const firstDay = new Date(thisYear, thisMonth, 1).getDay();

    weekRow = document.createElement('tr');
    weekRow.id = 'weekRow'
    // add first empty cells for the first week when required
    for(i = 0; i < firstDay; i++){
        const dayCell = document.createElement('td');
        dayCell.textContent = ' '
        dayCell.style.padding = '15px'
        dayCell.style.backgroundColor = 'EEAD56'
        weekRow.appendChild(dayCell)
    }

    // add month's first week dates
    let date = 1;
    for(i = firstDay; i <= 6; i++){
        const dayCell = document.createElement('td');
        dayCell.textContent = date
        dayCell.style.padding = '15px'
        dayCell.style.backgroundColor = 'EEAD56'
        weekRow.appendChild(dayCell)
        date++;
    }
    calendarRows.appendChild(weekRow)
    
    // add rest of the weeks
    while(date <= noOfDays){
        weekRow = document.createElement('tr')
        weekRow.id = 'weekRow'

        for(i = 0; i <=6; i++){
            const dayCell = document.createElement('td')
            dayCell.textContent = date;
            dayCell.style.padding = '15px';
            dayCell.style.backgroundColor = 'EEAD56'
            weekRow.appendChild(dayCell)
            date++;
            if (date > noOfDays){          //break if date exceeds no of days of the month
                break;
            }
        }
        calendarRows.appendChild(weekRow)
    }
}

function updateCalendarRows(){
    let calendarRows = document.getElementById('calendarRows')
    calendarRows.innerHTML = ''    
}