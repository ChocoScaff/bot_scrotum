# dependences : sudo, npm (qui sera installer automatiquement)
# demande le gestionnaire de paquet et installe npm

echo -e "\e[1;35m
 Quel est votre gestionnaire de paquets ? [pacman/dnf/apt]
 \e[0m"

read -r rep

if [ "$rep" = "pacman" ]; then
	# installe npm sur arch
	 sudo pacman -Sy npm
elif [ "$rep" = "dnf" ]; then
	# installe npm sur fedora
	 sudo dnf update && sudo dnf install npm
elif [ "$rep" = "apt" ]; then
	# installe npm sur debian
	sudo apt-get update && sudo apt-get install npm
else 
	echo "
	Tu sais lire bordel !
	 "
fi

# Installe le bot
# l'option -y permet de forcer npm à s'initialiser
echo -e "\e[1;35m 
Installation en cours ....
 \e[0m"
npm init -y
npm install --save discord.js

echo -e "\e[1;35m 
Installation finie
 \e[0m"

 cat stepipoule.cat
