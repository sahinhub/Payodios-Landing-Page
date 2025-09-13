'use client'
import * as React from "react";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";


const Stack = () => {
    return (
        <ScrollStack className="overflow-y-hidden">
        <ScrollStackItem itemClassName="bg-primary">
          <h2>Card 1</h2>
          <p>This is the first card in the stack</p>
        </ScrollStackItem>
        <ScrollStackItem itemClassName="bg-primary"> 
          <h2>Card 2</h2>
          <p>This is the second card in the stack</p>
        </ScrollStackItem >
        <ScrollStackItem itemClassName="bg-primary">
          <h2>Card 3</h2>
          <p>This is the third card in the stack</p>
        </ScrollStackItem>
      </ScrollStack>
    );
};

export default Stack;