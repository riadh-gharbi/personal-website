#!/bin/bash


if [ "$#" -lt 2 ]; then
	echo "Usage : $0 <title> <type>"
	exit 1
fi

if [[ -z "$2" ]]; then
	echo "Usage : You must include the type of post, either 'tech' or 'interests' "
	exit 1
fi

case "$2" in
	"tech")
		type="tech"
		;;
	"interests")
		type="interests"
		;;
	*)
		echo "Invalid post type inputted; choose either 'tech' or 'interests'"
		exit 1
		;;
esac


TITLE=$1
TYPE=$2
TEMPLATE_FILE="src/content/posts/_template.md"

TARGET_DIR="src/content/posts/$TYPE"
FILE="$TARGET_DIR/$TITLE.md"
CURRENT_DATE=$(date -u "+%Y-%m-%dT%H:%M:%SZ")

generate_markdown()
{
	cp "$TEMPLATE_FILE" "$FILE"

	sed -i "s|^title:.*|title: \"$TITLE\"|" "$FILE"
	sed -i "s|^garden:.*|garden : $TYPE|" "$FILE"
	sed -i "s|^pubDatetime:.*|pubDatetime : $CURRENT_DATE|" "$FILE"
	echo "Success : Created $FILE in $TYPE folder"
}

generate_markdown


