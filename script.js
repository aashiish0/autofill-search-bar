const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	//create results list
	let results = [];

	//filters fruits list and adds filtered furits to results list
	if (str.length > 0){
		results = fruits.filter(fruit => {
			return fruit.toLowerCase().includes(str.toLowerCase())
		})
	}


	//console.log(results)
	return results;
}

function searchHandler(e) {
	// Gets the current value of the input bar
	const inputVal = e.target.value
	//Results variable contains the search function which will filter values based on the input
	const results = search(inputVal)
	showSuggestions(results, inputVal)
}

function showSuggestions(results, inputVal) {


	//console.log(results)


	//displays the results list in the html
	const listElements = results.map(result => {
		return '<ul> <li>' + result + '<li><ul>'
	}).join(" ")

	suggestions.innerHTML = listElements
}

function useSuggestion(e) {

	//populates search bar with the fruit clicked
	if (e.target.tagName === 'LI'){
		const selectValue = e.target.textContent;
		input.value = selectValue;
		suggestions.innerHTML = ''
	}
}

//will highlight the hovered element
function handleMouseEnter(e){
	if (e.target.tagName === 'LI'){
		e.target.classList.add('hover')
		//console.log('mouse entered')
	}
}

function handleMouseLeave(e){
	if (e.target.tagName === 'LI'){
		e.target.classList.remove('hover')
		//console.log('mouse off')
	}
}



input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
suggestions.addEventListener('mousemove', handleMouseEnter)
suggestions.addEventListener('mouseout', handleMouseLeave)