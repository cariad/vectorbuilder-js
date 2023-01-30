/**
 * Vector builder.
 */
export default class VectorBuilder {
  /**
   * X component of the vector under construction.
   */
  private x: number;

  /**
   * Y component of the vector under construction.
   */
  private y: number;

  /**
   * Constructs a new vector builder with the initial vector (0, 0).
   */
  constructor();

  /**
   * Constructs a new vector builder.
   *
   * @param vector Initial vector.
   */
  constructor(initial: [number, number]);

  constructor(a: [number, number] | undefined = undefined) {
    if (a === undefined) {
      this.x = 0;
      this.y = 0;
    } else [this.x, this.y] = a;
  }

  /**
   * Adds a length to each dimension of the vector.
   *
   * @param n Length to add.
   */
  public add(n: number): VectorBuilder;

  /**
   * Adds a vector.
   *
   * @param v Vector to add.
   */
  public add(v: [number, number]): VectorBuilder;
  public add(a: number | [number, number]): VectorBuilder {
    if (typeof a === 'number') {
      this.x += a;
      this.y += a;
    } else {
      this.x += a[0];
      this.y += a[1];
    }
    return this;
  }

  /**
   * Builds the vector.
   *
   * @returns An array describing the constructed vector.
   */
  public build(): [number, number] {
    return [this.x, this.y];
  }

  /**
   * Multiplies each dimension by a length.
   *
   * @param n Length to multiply by.
   */
  public multiply(n: number): VectorBuilder;

  /**
   * Multiplies by a vector.
   *
   * @param v Vector to multiply by.
   */
  public multiply(v: [number, number]): VectorBuilder;
  public multiply(a: number | [number, number]): VectorBuilder {
    if (typeof a === 'number') {
      this.x *= a;
      this.y *= a;
    } else {
      this.x *= a[0];
      this.y *= a[1];
    }
    return this;
  }
}
