// Function to convert JSON to XML
function jsonToXml(json) {
  let xml = '<?xml version="1.0" encoding="UTF-8"?><data>';
  json.forEach(item => {
    xml += '<item>';
    Object.keys(item).forEach(key => {
      xml += `<${key}>${item[key]}</${key}>`;
    });
    xml += '</item>';
  });
  xml += '</data>';
  return xml;
}


// Fetch JSON data from the API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(jsonData => {
        const xmlData = jsonToXml(jsonData);

        // Fetch XSLT file and transform XML to HTML
        return fetch('style.xsl')
            .then(response => response.text())
            .then(xsltData => {
                // Function to transform XML with XSLT
                function transformXml(xmlString, xsltString) {
                    
                    const parser = new DOMParser();
                    const xml = parser.parseFromString(xmlString, 'application/xml');
                    const xslt = parser.parseFromString(xsltString, 'application/xml');
                    const xsltProcessor = new XSLTProcessor();
                    xsltProcessor.importStylesheet(xslt);
                    const resultDocument = xsltProcessor.transformToFragment(xml, document);
                    console.log(xmlString);
                    return resultDocument;
                }

                // Display the transformed HTML in the tableContainer
                document.getElementById('tableContainer').appendChild(transformXml(xmlData, xsltData));
            });
    })
    .catch(error => console.error('Error:', error));
