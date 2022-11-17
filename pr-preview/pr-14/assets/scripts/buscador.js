var client = algoliasearch('9SWKMC2I4H', '6f15aa15dbce1b41b99cd462002b952a');
var index = client.initIndex('jekyll');
index.setSettings({typoTolerance: false});

function newHitsSource(index, params) {
  return function doSearch(query, cb) {
    index
      .search(query, params)
      .then(function(res) {
        cb(res.hits, res);
      })
      .catch(function(err) {
        console.error(err);
        cb([]);
      });
  };
}

autocomplete('#search', { 
    //debug: true,
    hint: false,
    autoselect: true,
    dropdownMenuContainer: "#search-results",
    templates: {
      empty: '<span class="text-gray-400 py-10 flex items-center h-full text-xl">No se encontraron resultados</span>'
    }
  }, 
  [
    {
      source: newHitsSource(index),
      displayKey: 'title',
      templates: {
        suggestion: function(suggestion) {
          switch(suggestion.collection) {
            case "documentos": 
              suggestion.icon = '<div class="rounded-full py-1 px-2 text-xs bg-orange-500 mr-2 inline-flex align-text-bottom text-white">Documento</div>';
              break;
            case "paginas":
              suggestion.icon = '<div class="rounded-full py-1 px-2 text-xs bg-blue-900 mr-2 inline-flex align-text-bottom text-white">Página</div>';
              break;
          }
          return suggestion.icon + suggestion._highlightResult.title.value;
        }
      }
    }
  ]).on('autocomplete:selected', function(event, suggestion) {
    var suggestions = JSON.parse(localStorage.getItem("PD_suggestions") || "[]");
    if(suggestions.length === 3) {
      suggestions.pop();
    }
    suggestions.push(suggestion);
    localStorage.setItem("PD_suggestions", JSON.stringify(suggestions));
    window.location.href = suggestion.url;
  });