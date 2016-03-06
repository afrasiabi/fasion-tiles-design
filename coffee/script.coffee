images = []

makeFasionTile = (tileInfo) ->
	tileInnerHTML = """
		<img src="#{tileInfo.source}" alt="#{tileInfo.title}">
	"""
	containerElement = document.createElement "div"
	containerElement.classList.add "container"
	containerElement.classList.add "unFocusedTile"
	containerElement.style.width = tileInfo.tileSize.width + "px"
	containerElement.style.height = tileInfo.tileSize.height + "px"
	containerElement.innerHTML = tileInnerHTML
	return containerElement

image = document.getElementById "picView"
containerAll = document.getElementById "totalCon"
bigImage = document.getElementById "bigImg"

show = (imgSrc) ->
	bigImage.setAttribute("src", imgSrc)
	image.style.visibility = "visible"
	containerAll.style.opacity = .2
	
hide = ->
	image.style.visibility = "hidden"
	containerAll.style.opacity = 1

setClickEvent = (tiles,tileInfo) ->
	tiles.addEventListener "click", (event) ->
		show(tileInfo.source)
image.addEventListener "click" , hide 

makeRequest = (url, cbFunc) ->
	alertContents = ->
		if httpRequest.readyState == XMLHttpRequest.DONE
			if httpRequest.status == 200
				cbFunc httpRequest.responseText
			else
				alert "There was a problem with the request to #{url}"
		return

	httpRequest = new XMLHttpRequest

	if !httpRequest
		alert 'Giving up :( Cannot create an XMLHTTP instance'
		return false
	else	
		httpRequest.onreadystatechange = alertContents
		httpRequest.open 'GET', url
		httpRequest.send()
		return

holderElement = document.getElementById "tileHolder"
makeRequest "http://localhost:3000/gettingTiles",(res) ->	
	resObject = JSON.parse(res)
	if resObject.success
		for img in resObject.tiles
			tileElement = makeFasionTile(img)
			setClickEvent(tileElement,img)
			holderElement.appendChild(tileElement)
	else
		alert "There was a error when loading tiles"

