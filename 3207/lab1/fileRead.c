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
        configFile = fopen(args[1], "r");
    }

    if (configFile != NULL)
    {
        char *token;
        char searchString[LINE_LENGTH];
        float searchValue;
        char line[LINE_LENGTH];
        int i;

        while (fgets(line, LINE_LENGTH, configFile) != NULL)
        {
            token = strtok(line, " ");

            if (token != NULL)
            {
                strcpy(searchString, token);
            }
            else
            {
                continue;
            }
            token = strtok(NULL, " ");
            if (token != NULL)
            {
                searchValue = atof(token);
            }
            else
            {
                searchValue = 0;
            }

            for (i = 0; i < 5; i++)
            {
                if (strcmp(searchString, conf_types[i]) == 0)
                {
                    conf_values[i] = (int)searchValue;
                }
            }
        }
    }

    for (int k = 0; k < 5; k++)
    {
        printf("%s: %d\n", conf_types[k], conf_values[k]);
    }

    return 1;
}