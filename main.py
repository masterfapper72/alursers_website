from flask import Flask, request, render_template
from os import listdir
import os

app = Flask(__name__)

here = os.path.dirname(__file__)

# Define path variables

path = "/var/www/alurser-website/metadata/"

# Define Keywords to look for

common = "Common Grade"
uncommon = "Uncommon Grade"
rare = "Rare Grade"
epic = "Epical Grade"
legendary = "Legendary Grade"
mythic = "Mythical Grade"
god = "Divine Grade"

# Render form template file

@app.route("/")
def load_main():
    return render_template("index.html")

# Check for user input in the database and return the input rarity to the user

@app.route("/search", methods=['POST'])
def rarity_form_operation():
    common_load = "Common True"
    uncommon_load = "Uncommon True"
    rare_load = "Rare True"
    epic_load = "Epic True"
    l_load = "Legendary True"
    mythic_load = "Mythic True"
    god_load = "God True"
    error = False
    nftn = request.form["data"]
    user_input = f"\"{nftn}\""
    print(user_input)
    for filename in listdir(path):
        with open(f'{path}' + filename, "r") as currentFile:
            text = currentFile.read()
            if user_input in text and common in text:
                common_load = common_load
                return common_load
            elif user_input in text and uncommon in text:
                uncommon_load = uncommon_load
                return uncommon_load
            elif user_input in text and rare in text:
                rare_load = rare_load
                return rare_load
            elif user_input in text and epic in text:
                epic_load = epic_load
                return epic_load
            elif user_input in text and legendary in text:
                l_load = l_load
                return l_load
            elif user_input in text and mythic in text:
                mythic_load = mythic_load
                return mythic_load
            elif user_input in text and god in text:
                god_load = god_load
                return god_load
            else:
                error = True
    if error:
        return render_template("index.html", error=error)

# Run the script on server

if __name__ == "__main__":

    app.run(host="0.0.0.0")
