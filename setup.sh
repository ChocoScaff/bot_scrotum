# codes d'erreur : 
# 0.0 erreur iconnue ; merci de la signaler sur https://github.com/ChocoScaff !
# 0.1 Gestionnaire de paquets non valide
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
	echo "error 0.1" 
fi

# Installe le bot
# l'option -y permet de forcer npm à s'initialiser
echo -e "\e[1;35m 
Installation en cours ....
 \e[0m"
npm init -y
npm install --save discord.js
sudo npm install forever -g

echo -e "\e[1;35m 
Installation finie
 \e[0m"

 cat stepipoule.cat
