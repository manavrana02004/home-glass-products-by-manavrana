import Map "mo:core/Map";
import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";

actor {
  type Product = {
    id : Nat;
    name : Text;
    category : Text;
    shortDescription : Text;
    fullDescription : Text;
    specs : [(Text, Text)];
    imagePath : Text;
  };

  module Product {
    public func compare(product1 : Product, product2 : Product) : Order.Order {
      Nat.compare(product1.id, product2.id);
    };
  };

  let products = Map.empty<Nat, Product>();

  public shared ({ caller }) func addProduct(
    id : Nat,
    name : Text,
    category : Text,
    shortDescription : Text,
    fullDescription : Text,
    specs : [(Text, Text)],
    imagePath : Text,
  ) : async () {
    let product : Product = {
      id;
      name;
      category;
      shortDescription;
      fullDescription;
      specs;
      imagePath;
    };
    products.add(id, product);
  };

  public query ({ caller }) func getProduct(id : Nat) : async Product {
    switch (products.get(id)) {
      case (null) { Runtime.trap("Product not found") };
      case (?product) { product };
    };
  };

  public query ({ caller }) func getAllProducts() : async [Product] {
    products.values().toArray().sort();
  };

  public query ({ caller }) func getProductsByCategory(category : Text) : async [Product] {
    products.values().filter(
      func(product) {
        Text.equal(product.category, category);
      }
    ).toArray();
  };
};
