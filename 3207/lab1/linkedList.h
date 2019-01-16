#ifndef LINKEDLIST_H
#define LINKEDLIST_H

typedef struct LLNode{
    int val;
    struct LLNode *next;
} LLNode;

int printLL(LLNode* root);
int pushLL(LLNode* root, int newVal);
int popLL(LLNode* root);

#endif /** LINKEDLIST_H */
