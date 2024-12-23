const AddedThread = require('../AddedThread');

describe('AddedThread entities', () => {
  it('should throw error when payload did not contain needed property', () => {
    // Arrange
    const payload = {
      id: '123',
      title: 'Hello World',
    };

    // Action and Assert
    expect(() => new AddedThread(payload)).toThrow(
      'ADDED_THREAD.NOT_CONTAIN_NEEDED_PROPERTY',
    );
  });

  it('should throw error when payload does not meet data type requirements', () => {
    // Arrange
    const payload = {
      id: '123',
      title: 'A thread',
      owner: 123, // owner seharusnya string
    };

    // Action & Assert
    expect(() => new AddedThread(payload)).toThrow(
      'ADDED_THREAD.NOT_MEET_DATA_TYPE_SPECIFICATION',
    );
  });

  it('should create AddedThread entities correctly', () => {
    // Arrange
    const payload = {
      id: '123',
      title: 'A thread',
      owner: 'thread-owner',
    };

    // Action
    const addedThread = new AddedThread(payload);

    // Assert
    expect(addedThread).toBeInstanceOf(AddedThread);
    expect(addedThread.id).toEqual(payload.id);
    expect(addedThread.title).toEqual(payload.title);
    expect(addedThread.owner).toEqual(payload.owner);
  });
});
