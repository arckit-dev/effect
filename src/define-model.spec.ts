import { Schema } from 'effect';
import { describe, expect, it } from 'vitest';
import { defineModel } from './define-model';

describe('defineModel', () => {
  it('should decode a valid input', () => {
    const Name = defineModel(Schema.NonEmptyTrimmedString);

    expect(Name('hello')).toBe('hello');
  });

  it('should apply transform before decoding', () => {
    const Uppercase = defineModel(Schema.NonEmptyTrimmedString, (input) => input.toUpperCase());

    expect(Uppercase('hello')).toBe('HELLO');
  });

  it('should throw on invalid input', () => {
    const Name = defineModel(Schema.NonEmptyTrimmedString);

    expect(() => Name('')).toThrow();
  });

  it('should expose the schema property', () => {
    const schema = Schema.NonEmptyTrimmedString;
    const Name = defineModel(schema);

    expect(Name.schema).toBe(schema);
  });

  it('should use identity transform by default', () => {
    const Name = defineModel(Schema.NonEmptyTrimmedString);

    expect(Name('unchanged')).toBe('unchanged');
  });

  it('should work with structured schemas', () => {
    const schema = Schema.Struct({
      x: Schema.Number,
      y: Schema.Number
    });
    const Point = defineModel(schema);

    expect(Point({ x: 1, y: 2 })).toStrictEqual({ x: 1, y: 2 });
  });
});
