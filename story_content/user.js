function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5vJAtWYKMIO":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbzeogaYWkInNJWLQHyxEcOnSgGoZRmG2MD7wqA5MaNUqD1Iw84nGc6ZnI1QP5RrrPZX/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

