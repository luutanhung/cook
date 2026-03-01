import {
  Boolean as AstBoolean,
  ExpressionStatement,
  IntegerLiteral,
  Program,
} from "./ast.js";
import { Integer, Boolean as BooleanObject } from "./object.js";

export function evaluate(node) {
  if (node instanceof Program) {
    evalStatements(node.statements);
  }

  if (node instanceof ExpressionStatement) {
    return evaluate(node.expression);
  }

  if (node instanceof IntegerLiteral) {
    return new Integer(node.value);
  }

  if (node instanceof AstBoolean) {
    return new BooleanObject(node.value);
  }

  return null;
}

function evalStatements(stmts) {
  let result = null;
  for (let stmt of stmts) {
    result = evaluate(stmt);
  }
  return result;
}
