var nav = 0;
var item = true;
var someone = true;
var monster = true;
var sword = true;

function attack() {
    if(nav === 0)
        alert("There is no target.");
    if(nav === 1)
        alert("There is no target.");
    if(nav === 2)
        alert("There is no target.");
    if(nav === 3)
    {
        if(monster)
        {
            alert("I'd attacked the monster and he has dead.");
            monster = false;
            bg();
        }
        else
        {
            alert("There is no target.");
        }
    }   
    if(nav === 4)
        alert("There is no target. Just run away!");
}

function look() {
    if(nav === 0)
        alert("I guess there is no item here. However, I can hear someone's voice from right corner.");
    if(nav === 1)
    {
        if(someone)
        {
            alert("There is someone.");
        }
        else
        {
            alert("There is no other people to speak.");
        }
    }
    if(nav === 2)
    {
        if(item)
        {
            alert("There is a sword!");
        }
        else
        {
            alert("There is no item.");
        }
    }
    if(nav === 3)
        alert("There is no item.");
    if(nav === 4)
        alert("There is no item.");
}

function grab() {
    if(nav === 0)
        alert("There is no item to grab here.");
    if(nav === 1)
        alert("There is no item to grab here.");
    if(nav === 2)
    {
        if(sword)
        {
            document.getElementById("item").src = "resources/status2.png";
            alert("I've got the sword!");
            sword = false;
            item = false;
            bg();
        }
        else
        {
            alert("You've got the sword already.");
        }
    }
    if(nav === 3)
        alert("There is no item to grab here.");
    if(nav === 4)
        alert("There is no item to grab here.");
}

function speak() {
    if(nav === 0)
        alert("There is no other people to speak.");
    if(nav === 1)
    {
        if(someone)
        {
            alert("YOU : What's going on here?");
            alert("He : There is a monster... I'm dying... Kill him and rum away from here...");
            someone = false;
        }
        else
        {
            alert("There is no other people to speak.");
        }
    }
    if(nav === 2)
        alert("There is no other people to speak.");
    if(nav === 3)
        alert("There is no other people to speak.");
    if(nav === 4)
        alert("There is no other people to speak.");
}

function move(dir)
{
    if(nav === 0)
    {
        if(dir === 0)
        {
            nav = 1;
        }
        else
        {
            alert("This way is the dead end.");
            nav = 0;
        }
    }
    else if(nav === 1)
    {
        if(dir === 0)
        {
            nav = 2;
        }
        else
        {
            nav = 0;
        }
    }
    else if(nav === 2)
    {
        if(dir === 0)
        {
            nav = 3;
        }
        else
        {
            nav = 1;
        }
    }
    else if(nav === 3)
    {
        if(dir === 0)
        {
            if(monster)
            {
                alert("You should kill the monster first.");
            }
            else
            {
                nav = 4;
            }
        }
        else
        {
            nav = 2;
        }
    }
    else if(nav === 4)
    {
        if(dir === 0)
        {
            alert("Congratulations! You've escaped from Aidan's Dungeon!");
            location.reload();
            return;
        }
        else
        {
            nav = 3;
        }
    }
    bg();
}

function bg()
{
    console.log(nav);
    document.getElementById("bg0").style.display = "none";
    document.getElementById("bg1").style.display = "none";
    document.getElementById("bg2").style.display = "none";
    document.getElementById("bg2-1").style.display = "none";
    document.getElementById("bg3").style.display = "none";
    document.getElementById("bg3-1").style.display = "none";
    document.getElementById("bg4").style.display = "none";
    if(nav === 2)
    {
        if(sword) {
            document.getElementById("bg2").style.display = "block";
        } else {
            document.getElementById("bg2-1").style.display = "block";
        }
    } else if(nav === 3) {
        if(monster) {
            document.getElementById("bg3").style.display = "block";
        } else {
            document.getElementById("bg3-1").style.display = "block";
        }
    } else {
        document.getElementById("bg" + nav).style.display = "block";
    }
}