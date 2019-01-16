#include <stdio.h>
#include <stdlib.h>


typedef struct LLNode{
    int val;
    struct LLNode *next;
} LLNode;

int printLL(LLNode* root){
    if(root->next != NULL){
        do{
            root = root->next;
            printf("%d ", root->val);
        }while(root->next);
        printf("\n");
        return 1;
    }else{
        printf("Empty list\n");
        return 0;
    }
}

int pushLL(LLNode* root, int newVal){
    return 1;
}

int popLL(LLNode* root){
    return 1;
}

