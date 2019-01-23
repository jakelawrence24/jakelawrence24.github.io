#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define LINE_LENGTH 1024

const char *conf_types[5] = {"VAR_1", "VAR_2", "VAR_3", "VAR_4", "VAR_5"};

int conf_values[5] = {-1, -1, -1, -1, -1};

int main(int argc, char *args[])
{
    FILE *configFile = NULL;
    if (argc > 1)
    {
        // open the config file in read mode

        configFile = fopen(args[1], "r");
    }

    // if the config file was found
    if (configFile != NULL)
    {
        // token string used for splitting on space
        char *token;
        // used for searching for matched values
        char searchString[LINE_LENGTH];
        // value associated with a string
        float searchValue;
        // line of the file
        char line[LINE_LENGTH];
        int i;
        // reads a line from the file and sends it to line
        // also checks that it isn't NULL
        while (fgets(line, LINE_LENGTH, configFile) != NULL)
        {
            // get the first element of a space seperated line
            token = strtok(line, " ");
            // if the var name exists
            if (token != NULL)
            {
                // first value is the var name, copy to search string
                strcpy(searchString, token);
            }
            else
            {
                continue;
            }
            // tokenize the next element from the same line
            token = strtok(NULL, " ");
            // if the element is not null
            if (token != NULL)
            {
                // read that into our value float
                searchValue = atof(token);
            }
            else
            {
                // default to zero
                searchValue = 0;
            }

            // iterate through our conf types array and try to match
            // each var name parsed from the line
            for (i = 0; i < 5; i++)
            {
                if (strcmp(searchString, conf_types[i]) == 0)
                {
                    conf_values[i] = (int)searchValue;
                }
            }
        }
    }

    // print the key value pairs
    for (int k = 0; k < 5; k++)
    {
        printf("%s: %d\n", conf_types[k], conf_values[k]);
    }

    return 1;
}